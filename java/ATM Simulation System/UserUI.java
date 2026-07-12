import java.util.*;

public class UserUI {
    public static void main(String[] args){
        Scanner sc=new Scanner (System.in);

        System.out.println("heloo....");
        ArrayList<Bank> accounts=new ArrayList<>();
        

        while(true){
        System.out.println("enter your option");
        System.out.println("1. create account");
        System.out.println("2. login ");
        int option=sc.nextInt();
            if(option==1){
                System.out.println("creating new account");
                System.out.println("enter your pasword");
                String pass=sc.next();
                Bank Acc=new Bank(pass);
                accounts.add(Acc);
                System.out.println("your account number is "+Acc.acc);


            }
        }



       


            
        }
    }
    

