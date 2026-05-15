import java.util.*;

public class UserUI {
    public static void main(String[] args){
        Scanner sc=new Scanner (System.in);

        System.out.println("\n\n\nheloo....\n user");
        ArrayList<Bank> accounts=new ArrayList<>();
        boolean continu=true;
        

        while(continu){
            System.out.println("");
            System.out.println("----------------------------------------------------------------------------------------------------");
        System.out.println("\n\nenter your option");
        System.out.println("1. create account");
        System.out.println("2. login ");
        int option=sc.nextInt();
        System.out.println("----------------------------------------------------------------------------------------------------");

            if(option==1){
                System.out.println("creating new account");
                System.out.println("enter your name");
                sc.nextLine();
                String name=sc.nextLine();
                System.out.println("enter your age");

                int age=sc.nextInt();
                System.out.println("enter your pasword (only charector)");
                String pass=sc.next();
                Bank Acc=new Bank(pass,name,age);
                accounts.add(Acc);
                System.out.println("enter your pin of widrawal (numbers only)");
                int pin=sc.nextInt();
                Acc.set_pin(pin);
            System.out.println("----------------------------------------------------------------------------------------------------");

                System.out.println("\n\nthank you for reaching out us  \n");
                System.out.println("***************************************************");
                System.out.print("|");
                System.out.println("your account number is "+Acc.getacc()+"                      |");
                System.out.println("***************************************************\n");

                System.out.println("login to continue...");
                System.out.println("do you want to go back to main menu y/n");
                String sugg=sc.next();
            System.out.println("----------------------------------------------------------------------------------------------------");

                if(sugg.equals("n")){
                    continu=false;
                }




            }
            else if (option==2){
                System.out.println("**********************************************************************************************************************");
                System.out.println("hello user\nwelcome to our platform \nenter account number to login");
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
                    System.out.println("account not found give correct account number or try again later \n\n");
                
                }
                else{
                    
                    boolean islogined=false;
                    for(int i=0;i<3;i++){
                        System.out.println("you have "+(3-i)+" chance to enter your pasword \nenter pasword ");
                        String passwd=sc.next();
                        if(currentuser.getpass().equals(passwd)){
                System.out.println("\n**********************************************************************************************************************\n");

                            System.out.println("logined succesfully \n"+"hello "+currentuser.name);
                            islogined=true;
                            int option1;
                            while (true) {
                                
            System.out.println("----------------------------------------------------------------------------------------------------");
                            
                            System.out.println("\nenter your option");
                            System.out.println("1. check ballance");
                            System.out.println("2. deposit money");
                            System.out.println("3. widraw");
                            System.out.println("4. view last transection history");
                            System.out.println("5. view whole transection history");
                            System.out.println("6. logout");
                            System.out.println("----------------------------------------------------------------------------------------------------\n");
                            System.out.print("enter your option : "); option1=sc.nextInt();

                            if(option1==1){
                                System.out.println(currentuser.getball());
                            }
                            else if(option1==2){
                                System.out.println(currentuser.deposit());

                                
                            }
                            else if(option1==3){
                                System.out.println(currentuser.widraw());
                                
                            }
                            else if(option1==4){
                                currentuser.history.get(currentuser.history.size()-1).print();
                                
                            }
                            else if (option1==5) {
                                for (int j = currentuser.history.size()-1; j >=0 ; j--) {
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

            System.out.println("----------------------------------------------------------------------------------------------------");

                        }


                            break;

                        }


                    }
                    if(!islogined){
                        System.out.println("\nlimit reached try again later");
                            // break;
                    }

                }
               


            }
        }



       


            
        }
    }
    

