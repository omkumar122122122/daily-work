import java.util.*;


class shape{
    String color;

}
class tringle extends shape{
    int base;
    int hight;
    void area(){
        System.out.println(1/2*this.base*this.hight);

    }

}

public class inheritance {
    public static void main(){
        tringle t1=new tringle();
        t1.color="red";


    }

    
}
