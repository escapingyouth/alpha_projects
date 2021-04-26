def age_program():
    # Ask user whether to convert to seconds or to years 
    seconds_or_years = input("Give me seconds(s) or years(y)? ")
    if seconds_or_years == "s":
    # Ask user for number of seconds lived
        user_value = input("Enter the number of seconds you've lived for: ")
    # Convert age from seconds to years
        age_in_years = int(user_value)/60/60/24/365
    # Give user the number of years lived
        print("You have lived for {} years".format(age_in_years))
    elif seconds_or_years == "y":
    # Ask user for number of years lived
        user_value = input("Enter the number of years you've lived for: ")
    # Convert age from years to seconds
        age_in_seconds = int(user_value)*60*60*24*365
    # Give user the number of seconds lived
        print("You have lived for {} seconds".format(age_in_seconds))




