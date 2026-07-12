
public class Bank extends account {
    static int next_accountno=1000;
   
    
    private int acc;
    private String pass;
    Bank(String pass){

        this.acc=next_accountno++;
        this.pass=pass;


    }
    public String getpass(){
        return this.pass;
    }
    public int getacc(){
        return this.acc;
    }
   
    
    } 
    

