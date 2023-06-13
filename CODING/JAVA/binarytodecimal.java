import java.util.Scanner;

public class binarytodecimal{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int decimalno = sc.nextInt();
        int ans = 0;
        int pw = 1;
        while(decimalno > 0){
            int unitdigit = decimalno%10;
            ans=+ pw*unitdigit;
            decimalno = decimalno/10;
            pw = pw*2;
            System.out.print(ans);
        }
    }
}

    
