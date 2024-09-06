import { Button } from "@chakra-ui/react";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import type { Product } from "types";

interface AddToCartButtonContainerProps {
  /**
   * 追加される商品
   */
  product: Product;
  /**
   * 追加ボタンを押した時のイベントハンドラ
   */
  onAddToCartButtonClick?: (product: Product) => void;
}

/**
 * カート追加ボタンコンテナ
 */
const AddToCartButtonContainer = ({
  product,
  onAddToCartButtonClick,
}: AddToCartButtonContainerProps) => {
  const { cart, addProductToCart } = useShoppingCartContext();
  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    const result = cart.findIndex((v) => v.id === productId);

    // 同じ商品がカートに存在しない場合はカートに追加する
    if (result === -1) {
      addProductToCart(product);
    }

    onAddToCartButtonClick && onAddToCartButtonClick(product);
  };

  return (
    <Button
      width={{ base: "60%", md: "400px" }}
      height="66px"
      onClick={handleAddToCartButtonClick}
      _active={{ pointerEvents: "none" }}
    >
      {/* カートに追加 */}※ただいま在庫がありません
    </Button>
  );
};

export default AddToCartButtonContainer;
