package basic.array.basic;
import java.util.*;
public class array {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("hii ente your marks\n\nmaths\nenglish\ncomp");
        int[]marks=new int [3];
        for(int i=0;i<3;i++){
            marks[i]=sc.nextInt();
        }
        for(int i=0;i<3;i++){
            System.out.println(marks[i]);
            
        }

    }
    
}
