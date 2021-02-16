def age_program():
    seconds_or_years = input("Give me seconds(s) or years(y)? ")
    if seconds_or_years == "s":
        user_value = input("Enter the number of seconds you've lived for: ")
        age_in_years = int(user_value)/60/60/24/365
        print("You have lived for {} years".format(age_in_years))
    elif seconds_or_years == "y":
        user_value = input("Enter the number of years you've lived for: ")
        age_in_seconds = int(user_value)*60*60*24*365
        print("You have lived for {} seconds".format(age_in_seconds))




