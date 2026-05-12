import java.util.*;


class pen{

    String name;
    String type;

    public void write(){
        System.out.println(this.name+this.type);

    }

}

public class first_class {
   public static void main (String[] stgs){
     pen pen1=new pen();
    pen1.name="hhmm ";
    pen1.type="gel";
    pen1.write();


    
   }
    
}
