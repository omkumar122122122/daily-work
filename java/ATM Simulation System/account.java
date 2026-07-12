import java.util.*;
public class account extends transection {
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
        if(amount<=0){
            System.out.println("invalid amount");
            return ballance;
        }
        else{
            this.ballance+=amount;
            transection ts=null;
            ts.add_transection("deposit", amount);
            history.add(ts);

            

            return this.ballance;
            
        }
        
    } 




    public double widraw(){
        for(int i=3;i>0;i--){
            System.out.println("enter pin ");
            int entrpin=sc.nextInt();
            if(validatepin(entrpin)){
                System.out.println("enter amount");
                double amount=sc.nextInt();
                if(amount<=0){
                    System.out.println("invalid amount");
                    return ballance;
                }
                else{
                    this.ballance-=amount;
                    transection ts=null;
                    ts.add_transection("deposit", amount);
                    history.add(ts);
                    return this.ballance;

                }   
            }
            System.out.println("you have "+i+" chance left ");
        }
        return this.ballance;



    }



    
    
}
