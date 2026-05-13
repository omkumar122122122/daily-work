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

    Student(Student s){
        this.name=s.name;
        this.branch=s.branch;

    }
   
}

public class constructor {

    public static void main(){
        Student s2=new Student("om kumar","cse");
        s2.detail();
        Student s1= new Student(s2);
        s1.detail();
        


    }


    
}
