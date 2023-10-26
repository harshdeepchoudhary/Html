import pandas as pd

# Load MovieLens dataset
movies = pd.read_csv('movies.csv')
ratings = pd.read_csv('ratings.csv')

# Merge movie and rating data
movie_ratings = pd.merge(ratings, movies, on='movieId')

# Create a user-item matrix
user_movie_matrix = movie_ratings.pivot_table(index='userId', columns='title', values='rating')

# Calculate correlation matrix
movie_correlation = user_movie_matrix.corr()

# Function to get movie recommendations
def get_movie_recommendations(movie_name, user_ratings):
    similar_scores = movie_correlation[movie_name] * user_ratings
    similar_movies = similar_scores.dropna().sort_values(ascending=False)
    return similar_movies

# Sample user ratings
user_ratings = {
    'Toy Story (1995)': 5,
    'Jurassic Park (1993)': 4,
    'Shawshank Redemption, The (1994)': 3,
    'Star Wars: Episode IV - A New Hope (1977)': 5
}

# Get recommendations
recommendations = pd.Series()

for movie, rating in user_ratings.items():
    similar_movies = get_movie_recommendations(movie, rating)
    recommendations = recommendations.append(similar_movies)

# Print top recommended movies
print(recommendations.sort_values(ascending=False).head(10))
