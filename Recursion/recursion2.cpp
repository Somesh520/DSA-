#include<iostream>
#include<vector>

using namespace std;


bool search(int arr[],int size,int index,int target){
    if(index==size){
        return false;
    }
    if(arr[index]==target){
        return true;
    }

    bool ans=search(arr,size,index+1,target);
    return ans;
}
int main(){
    int n;
    cin>>n;

    vector<int>arr(n);

    for(int i=0;i<n;i++){
        cout<<"Enter"<<i<<" element--> ";
        cin>>arr[i];
    }

    int target;
    cin>>target;
int size=arr.size();
int index=0;

    bool ans=search(arr.data(),size,index,target);

    if(ans==true){
        cout<<"target found";    }
    else{
        cout<<"target not found ";
    }


}