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
class circle extends shape{
    int radious;

}

public class inheritance {
    public static void main(){
        tringle t1=new tringle();
        t1.color="red";
        circle c1=new circle();
        c1.color="red   ";


    }

    
}
