import ViewModelBase from '../viewModels/viewModelBase';

class CategoryViewModel extends ViewModelBase {
  constructor(categoryId, categories) {
    super(categoryId, categories);
  }

  set name(value) {
    this.entity.name = value;
  }
}

export default CategoryViewModel;