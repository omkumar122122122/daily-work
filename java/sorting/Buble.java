import java .util.*;

public class Buble {
    public static void BubleSort(int []arr){
        for(int i=arr.length;i>0;i--){
            for(int j=0;j<i;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }

        }
    }

    
    public static void main(String[] args){



    }
}
