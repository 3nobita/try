class Solution:
    def smallleff(self, root: Optional[TreeNode]) -> str:
        
        def helper (root cur):
            if not root:
                return
            cur = chr(ord('a')+root.val) + cur
            if root.left and root.right:
                return min (
                    helper (root.left ,cur),
                    helper (root.right ,cur)
                )
            if root.right:
                return helper (root.right, cur)
            if root.left:
                return helper (root.left, cur)
            return cur
        return helper(root,'')
        
