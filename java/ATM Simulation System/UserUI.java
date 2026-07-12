import java.util.*;

public class UserUI {
    public static void main(String[] args){
        Scanner sc=new Scanner (System.in);

        System.out.println("heloo....");
        ArrayList<Bank> accounts=new ArrayList<>();
        boolean continu=true;
        

        while(continu){
        System.out.println("enter your option");
        System.out.println("1. create account");
        System.out.println("2. login ");
        int option=sc.nextInt();
            if(option==1){
                System.out.println("creating new account");
                System.out.println("enter your pasword");
                String pass=sc.next();
                Bank Acc=new Bank(pass);
                accounts.add(Acc);
                System.out.println("thank you for reaching out us  \n");
                System.out.println("your account number is "+Acc.getacc()+"\n\n");
                System.out.println("do you want to continu y/n");
                String sugg=sc.next();
                if(sugg=="n"){
                    continu=false;
                }




            }
            else{
                System.out.println("hello user \n welcome to our platform \n enter account number");
                int account_number=sc.nextInt();
                Bank currentuser=null;
                boolean usernotfound=true;

                for(int i=0;i<accounts.size();i++){
                    if(accounts.get(i).getacc()==account_number){
                        usernotfound=false;
                        currentuser=accounts.get(i);
                        break ;
                    }


                }
                if(usernotfound){
                    System.out.println("account not found give correct account number\n\n");
                }
                else{
                    
                    boolean islogined=false;
                    for(int i=0;i<3;i++){
                        System.out.println("you have "+(3-i)+" chance to enter your pasword \n enter pasword ");
                        String passwd=sc.next();
                        if(currentuser.getpass().equals(passwd)){
                            islogined=true;
                            int option1;
                            while (true) {
                                
                            
                            System.out.println("logined succesfully \n");
                            System.out.println("enter your option");
                            System.out.println("1.check ballance");
                            System.out.println("2.deposit money");
                            System.out.println("3. widraw");
                            System.out.println("4. view last transection history");
                            System.out.println("5. view whole transection history");
                            System.out.println("6.logout");
                            option1=sc.nextInt();
                            if(option1==1){
                                currentuser.getball();
                            }
                            else if(option1==2){
                                currentuser.deposit();

                                
                            }
                            else if(option1==3){
                                currentuser.widraw();
                                
                            }
                            else if(option1==4){
                                currentuser.history.get(currentuser.history.size()-1).print();
                                
                            }
                            else if (option1==5) {
                                for (int j = currentuser.history.size(); j >0 ; j--) {
                                    currentuser.history.get(j).print();
                                    
                                    
                                }

                                
                            }
                            else if(option1==6){
                                System.out.println("loging out ......");
                                break;

                            }
                            else{
                                System.out.println("in valid option");
                            }
                        }


                            break;

                        }


                    }
                    if(!islogined){
                        System.out.println("limit reached try again later");
                            break;
                    }

                }
               


            }
        }



       


            
        }
    }
    

