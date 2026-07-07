package basic.loops_conditional.o;
public class tringle {
    public static void main(String[] args){
        int a=4,b=4;
        for(int i=1;i<=4;i++){
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            for(int j=1;j<=(2*(a-i));j++){
                System.out.print("  ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
            
        }
        for(int i=a;i>=1;i--){
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            for(int j=1;j<=(2*(a-i));j++){
                System.out.print("  ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
