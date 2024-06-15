# Rock Paper Scissors Game
import random

choices = ["rock", "paper", "scissors"]

def get_computer_choice():
    return random.choice(choices)

def get_user_choice():
    while True:
        user_choice = input("Enter rock, paper, or scissors: ")
        if user_choice.lower() in choices:
            return user_choice.lower()
        else:
            print("Invalid choice. Please try again.")

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == "rock" and computer_choice == "scissors") or \
         (user_choice == "scissors" and computer_choice == "paper") or \
         (user_choice == "paper" and computer_choice == "rock"):
        return "You win!"
    else:
        return "Computer wins!"

def play_game():
    computer_choice = get_computer_choice()
    user_choice = get_user_choice()
    print(f"Computer chose {computer_choice}.")
    print(f"You chose {user_choice}.")
    print(determine_winner(user_choice, computer_choice))

play_game()