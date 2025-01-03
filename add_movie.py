import json
import os
from datetime import datetime

# Function to validate if the type is correct
def validate_type(type_value):
    valid_types = ["Movie", "Tv Show"]
    if type_value not in valid_types:
        raise ValueError(f"Invalid type. Must be one of {', '.join(valid_types)}")

# Function to get the current date in the specified format
def get_current_date():
    return datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")

# Main function to process the input and update the JSON
def update_json(new_movie):

    # Load the existing JSON data
    json_file = "movies/movies.json"

    if not os.path.exists(json_file):
        raise ValueError("The file does not exists")

    with open(json_file, 'r') as file:
        data = json.load(file)

    # Prepend the new entry to the movies list
    data["movies"].insert(0, new_movie)

    # Save the updated data back to the JSON file
    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

# Function to get user input and confirm the data
def get_user_input():
    print("Enter movie details:")

    # Get title and imgURL (required)
    # Ensure valid movie title
    while True:
        title = input("Enter the movie title: ").strip()
        if title:
            break
        else:
            print("Error: Movie title cannot be empty or just spaces. Please enter a valid movie title.")

    # Ensure valid image URL
    while True:
        img_url = input("Enter the image URL: ").strip()
        if img_url:
            break
        else:
            print("Error: Image URL cannot be empty or just spaces. Please enter a valid image URL.")

    # Description (optional)
    description = input("Enter the description (or press Enter to skip): ").strip() or None

    # Date (optional)
    date = input("Enter the date in format yyyy-mm-ddTHH:MM:SS.sssZ (or press Enter to use today's date): ").strip() or None

    # Type (optional, default to "Movie")
    type_value = input("Enter type (Movie or Tv Show, default is Movie): ").strip() or "Movie"

    # Validate type
    try:
        validate_type(type_value)
    except ValueError as e:
        print(e)
        return None

    # Set date to current date if not provided
    if not date:
        date = get_current_date()

    new_movie = {
      "title": title,
      "imgURL": img_url,
      "description": description or "Todo...",
      "date": date,
      "type": type_value
    }

    # Show entered data for confirmation
    print("\nPlease confirm the details:")
    print(new_movie)

    # Ask user for confirmation
    confirmation = input("Do you want to add this entry to the JSON file? (Y/N): ").strip().upper()
    if confirmation == 'Y':
        # Proceed with updating the JSON file
        update_json(new_movie)
        print(f"Successfully added '{title}' to the JSON file.")
    else:
        print("Operation canceled. No data was added.")

# Entry point for the script
if __name__ == "__main__":
    get_user_input()
