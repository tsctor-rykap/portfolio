# num = 67
# print (num**3)

# num_list = [1, 2, 3, 4, 5]
# total = 0
# for num in num_list:
#     total += num
# print(total)

# for num in range (1,101):
#     if num % 9 != 0:
#         print(num)

def gcd(x,y):
    z = x % y
    if z == 0:
        return y
    else:
        return gcd(y, z)

a = 2058
b = 10
print(gcd(a,b))
