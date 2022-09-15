import java.util.Scanner;
public class task14{
    public static void main(String[] args){
        System.out.println("Input a number:");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        
        for(int i=0;i<10;i++){
            System.out.println(num + "*" + (i+1) + "=" + (num*(i+1)));
        }
        
        
        
        
        
    }
}
