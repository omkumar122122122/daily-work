import java.util.*;

public class conditional {
    public static void main(String[] srgs){
        Scanner sc=new Scanner(System.in);
        int age=sc.nextInt();
        if(age<0){
            System.out.print("invalid age ");
        }
        if (age<18) {
            System.out.print("not adult");
        } else {
            System.out.print("adult you are eligibal for vote");
        }
    }
    
}
