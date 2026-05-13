import java.util.*;

class Student{
    String name;
    String department;
    String branch;

    void detail(){
        System.out.println(this.name+" \n"+this.branch);
    }

    Student(){
        System.out.println("student added");
    }
    Student(String name ,String branch){
        this.name=name;
        this.branch=branch;

    }
   
}

public class constructor {

    public static void main(){
        Student s1= new Student();
        Student s2=new Student("om kumar","cse");
        s1.detail();
        s2.detail();


    }

    
    
}
