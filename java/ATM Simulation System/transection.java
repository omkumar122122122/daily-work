import java.sql.Timestamp;
public class transection {
    String statement;
    double amount;
    double ball;
    Timestamp ts=new Timestamp(System.currentTimeMillis());
    public void add_transection(String st,double am,double bal){
        this.ball=bal;
        this.amount=am;
        this.statement=st;

    }

    public void print(){
        System.out.println(this.statement+" "+this.amount+" at "+this.ts+" balence left : "+this.ball);
    }
    
}
