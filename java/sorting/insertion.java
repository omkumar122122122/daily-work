import java.util.*;

public class insertion {
    public static void InsretionSort(int[] arr){
        int j;
        int current;

        for(int i=1;i<arr.length;i++){
             current=arr[i];
            for( j=i-1;j>=0;j--){
                if(current<arr[j]){
                    arr[j+1]=arr[j];

                }
                else {
                    break;
                }
                // Buble.PrintArr(arr);
                // System.out.println("");
                
            }
            arr[j+1]=current;
        }

    }
    public static void main(String[] args){
        int[] arr={1,5,7,3,5,4,3,4,12,7,15,1,5,9,45,75,8,45,6,4,1,2,5,4,2,75,0};
        Buble.BubleSort(arr);
        Buble.PrintArr(arr);
        System.out.println("");
        int[] arr2={1,5,7,3,5,4,3,4,12,7,15,1,5,9,45,75,8,45,6,4,1,2,5,4,2,75,0};
        InsretionSort(arr2);
        Buble.PrintArr(arr2);


    }
    
}
