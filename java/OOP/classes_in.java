import java.util.*;

class Student{
    String name;
    String branch;
    void detail(){
        System.out.println(this.name+" \n"+this.branch);
    }

}


public class classes_in {

    public static void main(String[] args){

        Student stydent01= new Student();
        stydent01.name="om";
        stydent01.detail();


    }
    
}
