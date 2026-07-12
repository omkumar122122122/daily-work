import java.util.*;
public class account extends transection {
    Scanner sc=new Scanner(System.in);
    private int pin;
    private double ballance;

    ArrayList<transection> history=new ArrayList<>();

    public void set_pin(int pin){
        this.pin=pin;
    }
    public boolean validatepin(int pin){
        if(this.pin==pin){
            System.out.println("pin validated succesfully");
            return true;

        }
        else{
            return false;
        }
    }






    public double getball(){
        System.out.print("avilable ballance : ");

        return this.ballance;
    }





    public double deposit(){
        System.out.println("enter amount");
        double amount=sc.nextDouble();
        if(amount<=0){
            System.out.println("invalid amount\ncurrent ballence : ");
            transection ts=new transection();
            ts.add_transection("deposit faild", amount,this.ballance);
            history.add(ts);
            return ballance;

        }
        else{
            this.ballance+=amount;
            transection ts=new transection();
            ts.add_transection("deposit", amount,this.ballance);
            history.add(ts);

            System.out.print("deposit succesfully\navilable ballance : ");

            

            return this.ballance;
            
        }
        
    } 




    public double widraw(){
        for(int i=3;i>0;i--){
            System.out.println("enter amount");
            double amount=sc.nextInt();
            System.out.println("enter pin ");
            int entrpin=sc.nextInt();
              
            if(validatepin(entrpin)){
                if(amount<=0||amount>this.ballance){
                    System.out.println("invalid amount\navilable ballance : ");
                    transection ts=new transection();
                    ts.add_transection("widrawal fail", amount,this.ballance);
                    history.add(ts);
                    return this.ballance;
                }
                else{
                    this.ballance-=amount;
                    transection ts=new transection();
                    ts.add_transection("widrawal", amount,this.ballance);
                    history.add(ts);
                    System.out.print("widrawal succesfully\navilable ballance : ");

                    return this.ballance;

                } 
            }
            System.out.println("you have "+i+" chance left ");
        }
            transection ts=new transection();
            ts.add_transection("widrawal fail", amount,this.ballance);
            history.add(ts);
        System.out.println("widrawal un susses full");
        return this.ballance;



    }



    
    
}
