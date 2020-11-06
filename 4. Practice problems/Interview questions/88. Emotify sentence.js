/*
 * Emotify Sentence

Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples

emotify("Make me smile") ➞ "Make me :D"

emotify("Make me grin") ➞ "Make me :)"
*/

const emotify = str =>
  str.split(' ').includes('smile')
    ? str.replace('smile', ':D')
    : str.split(' ').includes('grin')
    ? str.replace('grin', ':)')
    : str.split(' ').includes('sad')
    ? str.replace('sad', ':(')
    : str.split(' ').includes('mad')
    ? str.replace('mad', ':P')
    : 0

console.log(emotify('Make me smile'))
