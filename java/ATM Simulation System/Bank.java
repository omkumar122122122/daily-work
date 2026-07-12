
public class Bank extends account {
    static int next_accountno=1000;
    String name;
    int age;
   
    
    private int acc;
    private String pass;
    Bank(String pass,String name,int age){

        this.acc=next_accountno++;
        this.pass=pass;
        this.name=name;
        this.age=age;


    }
    public String getpass(){
        return this.pass;
    }
    public int getacc(){
        return this.acc;
    }
   
    
    } 
    

