import math

while True:
    print("=============> scientific calculator <================")
    print("1. add")
    print("2. sub")
    print("3. mul")
    print("4.div")
    print("5. squre")
    print("6. sq root")
    print("7. pawor ")
    print("8. log")
    print("9. sine")
    print("10. cos ")
    print("11. tan")
    print("12. factorial")
    print(" exit")

    n= int(input("enter your choice"))
    if n==1:
        a=float(input("Enter first"))
        b=float(input("Enter second"))
        print("result=",a+b)
    elif n==2:
            a=float(input("Enter first"))
            b=float(input("Enter second"))
            print("result=",a-b)
    elif n==3:
                a=float(input("Enter first"))
                b=float(input("Enter second"))
                print("result=",a*b)
    elif n==4:
                    a=float(input("Enter first"))
                    b=float(input("Enter second"))
                    print("result=",a/b)
    elif n==5:
                    a=float(input("Enter first"))
                    
                    print("result=",a**2)
    elif n==6:
                    a=float(input("Enter first"))
                    
                    print("result=",math.sqrt(a))
    elif n==7:
                    a=float(input("Enter first"))
                    b=float(input("Enter second"))
                    print("result=",a**y)
    elif n==8:
                        a=float(input("Enter first"))
                        print("result=",math.log10(a))
    elif n==9:
                            a=float(input("Enter first"))
                            
                            print("result=",math.sin(math.radians(a)))
    elif n==10:
                        a=float(input("Enter first"))
                        
                        print("result=",math.cos(math.radians(a)))
    elif n==11:
                        a=float(input("Enter first"))
                        
                        print("result=",math.tan(math.radians(a)))
    elif n==12:
                        a=float(input("Enter first"))
                        
                        print("result=",math.factorial(a))
    elif n==13:
                        
                        print("thank you for using sintific calculator ")
                        break
    else:
            print("invalid input")
        
                           