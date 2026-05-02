import java.util.*;
public class hollow_sq {
 public static void main(String[] args){
    int b=10,a=10  ;
    for(int i=1;i<=a;i++){
      for(int j=1;j<=b;j++){
          if(i==a ||i==1 ||j==b||j==1){
              System.out.print("* ");
            }
            else{
              System.out.print("  ");

          }
        }
        System.out.println();
    }
 }
}
