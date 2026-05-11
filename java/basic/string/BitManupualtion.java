import java.util.*;
public class BitManupualtion {
    public static void main(String[] args ){
        Scanner sc=new Scanner(System.in);
        int n=5;
        System.out.println("enter position ");
        int pos=sc.nextInt();
        int bit_mask=n<<pos;
        if((bit_mask&n)==0){
            System.out.println("the bit is zero");

        }
        else{
            System.out.println("the bit is one");
        }
        sc.close();

    }
    
}
