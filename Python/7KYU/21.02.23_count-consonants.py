# https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/python

'''
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
'''

def consonant_count(s):
    """Count consonants in string

    :param s: string
    :return: int - number of letters in string that are consonants
    """

    input = s.lower()
    count = 0
    
    consonants = ("b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z")
    
    for letter in consonants:
        count = count + input.count(letter)

    return count