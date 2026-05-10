import java.util.*;
public class seter {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=6;
        System.out.println("enter position");
        int pos=sc.nextInt();

        int bit_mask=1<<pos;
        n=bit_mask|n;
        System.out.println(n);
    }
    
}
