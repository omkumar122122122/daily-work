import java.util.*;


class Student{
    String name;
    int roll;
    float persentage;

    void set(String name){
        this.name=name;
    }
    void set(int roll){
        this.roll=roll;
    }
    void set(float per){
        this.persentage=per;
    }
}


public class polymorphism {

    public static void main(){

        Student s1=new Student();
        s1.set(90.0);
        s1.set(12);
        s1.set("omkumar");

    }
    
}
