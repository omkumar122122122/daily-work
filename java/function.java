import java.util.*;
public class function {
    public static int factorial(int n){
        if(n==0||n==1){
            return 1;
        }
        else if(n<0){
            System.out.println("invalid number");
        }
        else{
            int f=1;
            for(int i=2;i<=n;i++){
                f*=i;

            }
            return f;
            
            
        }
        
        return 0;


    }
    public static int gcd(int a,int b){
        int s=0,gd=1;
        if(a<=b){
            s=a;
        }
        else{
            s=b;
        }
        for(int i=1;i<=s;i++){
            if(a%i==0&&b%i==0){
                gd=i;
            }
        }
        return gd;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter a number");
        int n=sc.nextInt();
        int re=factorial(n);
        System.out.println((re));

    }
    
}
