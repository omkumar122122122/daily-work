import java.util.*;
public class FirstUshortedElement{
   public static int FirstUnsortedElement(int[] arr){
    for(int i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return arr[i+1];

            
        }
    }
    System.out.println("full array is sorted");
    return 0;
   }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int[] arr={1,2,3,4,5,6,7,8};

        System.out.println("First unsorted element in arrray is ");
        int a=FirstUnsortedElement(arr);
        System.out.println(a);
        
    }
}