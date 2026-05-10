import java.util.*;
public class updateBit {

    int  clr(int n,int pos){
        int bit_mask=1<<pos;
        bit_mask=~(bit_mask);
        n=bit_mask&n;
        return n;

    }
    int set(int n,int pos){
        int bit_mask=1<<pos;
        n=bit_mask|n;
        return n;
    }
   public static void main(String[] args){

    int n=5;
    int pos=0;

    int bit_mask=1<<pos;
        if((bit_mask&n)==0){
            clr(n,pos);

        }
        else{
            System.out.println("the bit is one");
        }
   }
    
}
