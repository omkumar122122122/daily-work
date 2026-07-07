package basic.loops_conditional.o;
public class tilt_rec {
   public static void main(String[] args){
    int a=5,b=5;
    for(int i=1;i<=a;i++){
        for(int j=1;j<=b-i;j++){
            System.out.print("  ");
        }
        for(int j=1;j<=b;j++){
            System.out.print("* ");
        }
        
        System.out.print("\n ");
    }
   }
}
