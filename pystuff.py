# def gcd(a,b):
#     r = a % b
#     if r == 0:
#             return b
#     else:
#         return gcd(b,r)
# print (gcd(74676,15))

# words = ["everywhen", "erf", "bumbleshoot", "cleet", "finifugal"]
# sum = 0
# for word in words:
#     vowels = 0
#     for letter in word.lower():
#         if letter in ['a', 'e', 'i', 'o', 'u']:
#             vowels += 1
#     if vowels % 2 == 0:
#         sum += 1
#     else:
#         sum += 2
# print(sum)
class Cup: 
    def __init__(self, color, size, material, content):
        self.color = color
        self.size = size
        self.material = material
        self.content = content
        self.fill = 1.0
    def drink(self,amount):
        self.fill -=amount/self.size

class Ketchup (Cup):
    def __init__(self, size, material):
        super().__init__("red", size, material, "ketchup")
    def drink(self):
        print("NO")
    def sauce(self, food):
        self.fill -= 0.1
        print(f"I have sauced your {food}.")
bob = Cup("navy blue", 16, "steel", "coffee")
print(bob.fill)
bob.drink(2)      
print(bob.fill)      
heinz = Ketchup(14, "plastic")
print(heinz.fill)
heinz.sauce("fry")      
print(heinz.fill)