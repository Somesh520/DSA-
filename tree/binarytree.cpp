#include <iostream>
using namespace std;

class Node{
public:
    int data;
    Node * right;
    Node * left;

    Node(int d){
        this->data=d;
        this->left=NULL;
        this->right=NULL;
    }

};

void inorder(Node* root) {
    if (root == NULL) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}


Node* insertbst(Node* &root,int d){
    //base case
    if(root==NULL){
        root=new Node(d);
        return root;
    }
    if(d>root->data){
        root->right=insertbst(root->right,d);

    }
    else{
        root->left=insertbst(root->left,d);
    }
    return root;
}

void takeinput(Node* &root){
    int data;
    cin>>data;
    while(data!=-1){
        root=insertbst(root,data);
        cin>>data;
    }

}

int  main(){
    Node* root=NULL;
    cout<<"enter element in bst\n";
     takeinput(root);
     inorder(root);
cout << endl;
     return 0;
     //base 
    
}