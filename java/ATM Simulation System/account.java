import java.util.*;
public class account {
    Scanner sc=new Scanner(System.in);
    private int pin;
    private double ballance;

    ArrayList<transection> history=new ArrayList<>();
    public boolean validatepin(int pin){
        if(this.pin==pin){
            return true;

        }
        else{
            return false;
        }
    }

    public double getball(){
        return this.ballance;
    }
    public double deposit(){
        System.out.println("enter amount");
        double amount=sc.nextDouble();
        
        this.ballance+=amount;
        return this.ballance;
    } 
    public double widraw(double amount){
        if(validatepin(pin))
        this.ballance-=amount;
        return this.ballance;

    }



    
    
}
