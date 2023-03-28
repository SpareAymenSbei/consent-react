import AuthItemModel from '../../../../types/auth-item.model';
import Classes from './AuthItem.module.scss';
function AuthItem(item: AuthItemModel) {
  const title: string[] = item.title.split('::');

  return (
    <div className={Classes.item}>
      <img className={Classes.item_img} src={item.imgUrl} alt={item.title} />
      <div>
        <div className={Classes.title}>
          <div>{title[0]}</div>
          {
            title[1] != null && <div>{title[1]}</div>
          }
        </div>
        <div className={Classes.description}>{item.description}</div>
      </div>
    </div>
  )
}

export default AuthItem