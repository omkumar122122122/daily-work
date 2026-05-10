import java.util.*;
public class clear {
    public static void main(String[] a){
        int n=5;
        int pos=2;
        int bit_mask=1<<pos;
        bit_mask=~(bit_mask);
        n=bit_mask&n;
        System.out.println(n);

    }
    
}
