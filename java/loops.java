import java.util.*;
public class loops {
    public static void main(String[] argus){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter no. whouse table is to be printd");
        int a;
        a=sc.nextInt();
        for(int i=1;i<=10;i++){
            System.out.println(a+"*"+i+"="+a*i);
        }
        sc.close();
    }
    
}
