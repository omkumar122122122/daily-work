import java.sql.Timestamp;
public class transection {
    String statement;
    double amount;
    Timestamp ts=new Timestamp(System.currentTimeMillis());
    public void add_transection(String st,double am){
        this.amount=am;
        this.statement=st;

    }

    public void print(){
        System.out.println(this.statement+" "+this.amount+" at "+this.ts);
    }
    
}
