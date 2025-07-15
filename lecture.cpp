#include<iostream>
#include<cstring> // For strlen
using namespace std;

// void lowerCase(char arr[], int n){
//     int len = strlen(arr);
//     for(int i = 0; i < len; i++){
//         char ch = arr[i];
//         if (ch >= 'A' && ch <= 'Z') {
//             arr[i] = ch - 'A' + 'a';
//         }
//     }
// }
// void upperCase(char arr[], int n){
//     int len = strlen(arr);
//     for(int i = 0; i < len; i++){
//         char ch = arr[i];
//         if (ch >= 'a' && ch <= 'z') {
//             arr[i] = ch - 'a' + 'A';
//         }
//     }
// }

// void reversestring(int arr[],int n){
//     int len=strlen(arr);
//     for(int i=len;i>=0;i--){
//         arr[len-i]=arr[len];
//     }
// }
// bool chaeckpalindrome(char  arr[],int n){
//     int len=strlen(arr);
//     int i=0;
//     int j=len-1;
//     while(i<=j){
//         if(arr[i]==arr[j]){
//             i++;
//             j--;
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }
int main(){
    char arr[100];
    cin >> arr; // Input stops at space

    // upperCase(arr, 100);
// lowerCase(arr,100);
// abb humlog reverse krgeg 
// rversestring(arr,100);
 
cout << chaeckpalindrome(arr,100) << endl;
    return 0;
}
