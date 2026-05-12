import java.util.*;
public class updateBit {

   public static int   clr(int n,int pos){
        int bit_mask=1<<pos;
        bit_mask=~(bit_mask);
        n=bit_mask&n;
        return n;

    }
   public static int set(int n,int pos){
        int bit_mask=1<<pos;
        n=bit_mask|n;
        return n;
    }
   public static void main(String[] args){

    int n=5;
    int pos=1;

    int bit_mask=1<<pos;
        if((bit_mask&n)==0){
            n=set(n,pos);

        }
        else{
            n=clr(n, pos);
            
        }
        System.out.println(n);
   }
    
}
