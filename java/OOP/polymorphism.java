import java.util.*;


class Student{
    String name;
    int roll;
    float persentage;

    void detail(){
        System.out.println(this.name+" \n"+this.roll+""+this.persentage);
    }

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
        float per=9+9/10;
        s1.set(per);
        s1.set(12);
        s1.set("omkumar");
        s1.detail();


    }
    
}
